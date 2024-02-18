import { SESClient } from "@aws-sdk/client-ses";

const REGION = "us-east-1";

const accessKeyId = process.env.AZM_ACCESS_KEY ? process.env.AZM_ACCESS_KEY : ''
const secretAccessKey = process.env.AZM_SECRET_KEY ? process.env.AZM_SECRET_KEY : ''

const sesClient = new SESClient({ region: REGION, credentials: { accessKeyId, secretAccessKey } });
export { sesClient };
