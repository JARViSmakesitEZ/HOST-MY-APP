

import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
  accessKeyId: //ACCESS KEY ID,
  secretAccessKey: //SECRET ACCESS KEY,
});

export const uploadFile = async (fileName: string, localFilePath: string) => {
  console.log("called");
  const fileContent = fs.readFileSync(localFilePath);
  console.log(fileContent);
  const response = await s3
    .upload({
      Body: fileContent,
      Bucket: "host-my-app",
      Key: fileName,
    })
    .promise();
  console.log(response);
};
