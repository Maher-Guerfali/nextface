// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { Storage } from '@google-cloud/storage';
import path from 'path';
import fs from 'fs';

// This is important to tell Next.js not to parse the request body (formidable handles this)
export const config = {
  api: {
    bodyParser: false,
  },
};

// Initialize Google Cloud Storage
const storage = new Storage({
  projectId: 'brilliantdemo', // Replace with your project ID
  keyFilename: path.join(process.cwd(), 'jsonapicredit.json'), // Adjust path if needed // here to change to github varaibles
});

// Your Google Cloud Storage bucketS
const bucket = storage.bucket('brilliantbucket');

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const form = formidable({});

  // Parse the form data to get files
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error parsing the files' });
    }

    // Assuming a single file upload
    const file = files.file[0]; // Adjust if your input name is different
    const filePath = file.filepath;
    const fileName = file.originalFilename || 'uploaded-video.mp4';
    const blob = bucket.file(fileName);

    try {
      // Upload the file to Google Cloud Storage
      await new Promise<void>((resolve, reject) => {
        fs.createReadStream(filePath)
          .pipe(blob.createWriteStream())
          .on('error', (err) => reject(err))
          .on('finish', () => resolve());
      });

      // Get the public URL of the uploaded file
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      res.status(200).json({ url: publicUrl });
    } catch (error) {
      console.error('Error uploading file to Google Cloud:', error);
      res.status(500).json({ error: 'Failed to upload the file to cloud storage' });
    }
  });
};

export default handler;
