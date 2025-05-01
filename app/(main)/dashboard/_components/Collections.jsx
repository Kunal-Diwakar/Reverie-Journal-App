"use client";

import { useState, useEffect } from "react";
import { createCollection } from "@/actions/collection";
import { toast } from "sonner";
import CollectionForm from "@/components/Collection-Form";
import CollectionPreview from "./Collection-Preview";
import useFetch from "@/hooks/use-fetch";

const Collections = ({ collections = [], entriesByCollection = [] }) => {
  const [isCollectionDialogOpen, setIsCollectionDialogOpen] = useState(false);

  const {
    loading: createCollectionLoading,
    fn: createCollectionFn,
    data: createdCollection,
  } = useFetch(createCollection);

  useEffect(() => {
    if (createdCollection) {
      setIsCollectionDialogOpen(false);
      toast.success(`Collection ${createdCollection.name} created!`);
    }
  }, [createdCollection, createCollectionLoading]);

  const handleCreateCollection = async (data) => {
    createCollectionFn(data);
  };

  if (collections.length === 0) return <></>;

  return (
    <section id="collections" className="space-y-6">
      <h2 className="text-5xl md:text-6xl font-semibold gradient-title">
        Collections
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Create New Collection Button */}
        <CollectionPreview
          isCreateNew={true}
          onCreateNew={() => setIsCollectionDialogOpen(true)}
        />

        {/* Unorganized Collection */}
        {/* {entriesByCollection?.unorganized?.length > 0 && (
          <CollectionPreview
            name="Unorganized"
            entries={entriesByCollection.unorganized}
            isUnorganized={true}
          />
        )} */}

        {/* User Collections */}
        {collections?.map((collection) => (
          <CollectionPreview
            key={collection.id}
            id={collection.id}
            name={collection.name}
            entries={entriesByCollection[collection.id] || []}
          />
        ))}

        <CollectionForm
          loading={createCollectionLoading}
          onSuccess={handleCreateCollection}
          open={isCollectionDialogOpen}
          setOpen={setIsCollectionDialogOpen}
        />
      </div>
    </section>
  );
};

export default Collections;
