import formidable from "formidable";
import cloudinary from "../../../util/cloudinary";
import dbConnect from "../../../util/dbConnect";
import Post from "../../../models/Post";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "POST":
      const form = new formidable.IncomingForm();
      const formData = await new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
          if (err) res.status(400).send(err);
          const path = await cloudinary.uploader.upload(files.file.filepath);
          resolve({ ...fields, image: path.secure_url });
        });
      });

      try {
        const post = await Post.create(formData);
        res.status(201).json(post);
      } catch (err) {
        res.status(400).json(err);
      }
      break;
    default:
      res.status(400).json("error");
      break;
  }
}
