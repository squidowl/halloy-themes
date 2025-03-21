import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();
      const file = formData.get('file') as File;
      
      if (!file) {
        return fail(400, { error: 'No file uploaded' });
      }
      
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      console.log(buffer);
      
      return { 
        success: true, 
        message: `Theme "${file.name}" has been submitted successfully!`,
        fileName: file.name,
      };
    } catch (error) {
      console.error('Upload error:', error);
      return fail(500, { 
        error: 'File upload failed', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  }
};