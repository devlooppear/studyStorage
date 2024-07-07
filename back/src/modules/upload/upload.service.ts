import { Injectable } from '@nestjs/common';
import { FileDTO } from './upload.dto';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class UploadService {
  async upload(file: FileDTO) {
    const supabaseURL = process.env.SUPABASE_URL;
    const supabaseKEY = process.env.SUPABASE_KEY;

    const supabase = createClient(supabaseURL, supabaseKEY, {
      auth: {
        persistSession: false,
      },
    });

    try {
      const { data, error } = await supabase.storage
        .from('studyStorage')
        .upload(file.originalname, file.buffer, {
          upsert: true,
        });

      if (error) {
        throw new Error(`Upload failed: ${error.message}`);
      }

      return { success: true, data };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
