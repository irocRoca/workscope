import formidable from "formidable";
import cloudinary from "../../util/cloudinary";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const form = new formidable.IncomingForm();
      const formData = await new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
          if (err) res.status(400).send(err);
          const path = await cloudinary.uploader.upload(files.file.filepath);
          resolve([fields, path]);
        });
      });

      // Save the data to database

      //console.log(formData);
      res.status(201).json("Success");
      break;
    default:
      res.status(400).json("error");
      break;
  }
}
