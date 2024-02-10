//access key:AKIAYFCBHN5FOEVUZJBK
//secret access key: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

import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
  accessKeyId: "AKIAYFCBHN5FOEVUZJBK",
  secretAccessKey: "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",
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
