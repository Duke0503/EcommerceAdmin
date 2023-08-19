"use client";

// Global Imports
import React from 'react';
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"

// Local Imports
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from '@/hooks/use-store-modal';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';

// Create a form using a Zod schema
const formSchema = z.object({
  name: z.string().min(1),
});

export default function StoreModal() {
  // Store Modal hook
  const storeModal = useStoreModal();

  // Define a form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })

  // Define a submit handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    // TODO: Create Store
  }

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="py-2 pb-4 space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="text" {...field} />
                    </FormControl>
                    <div className="w-full pt-6 space-x-2 flex items-center justify-end">
                      <Button 
                        variant="outline" 
                        onClick={storeModal.onClose}
                      >
                        Cancel
                      </Button>
                      <Button type="submit">Continue</Button>
                    </div>
                  </FormItem>
                )}
              />

            </form>
          </Form>
        </div>
      </div>
    </Modal>
  )
}
