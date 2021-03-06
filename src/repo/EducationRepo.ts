import { RESUME_TABLE } from "../config/Config";
import AWS from "aws-sdk";
import EducationItem from "../model/EducationItem";
import logger from "../config/Logger";

class EducationRepo {
  private dynamoDb: AWS.DynamoDB.DocumentClient;

  constructor() {
    this.dynamoDb = new AWS.DynamoDB.DocumentClient();
  }

  getEducationSection = async (): Promise<EducationItem[]> => {
    const params = {
      TableName: RESUME_TABLE as string,
      KeyConditionExpression: "sectionName = :sectionName",
      ExpressionAttributeValues: {
        ":sectionName": "education"
      }
    };
  
    let result;
  
    try {
      logger.info("Retrieving education items from DynamoDB");
      result = await this.dynamoDb.query(params).promise();
    } catch (e) {
      logger.error(e);
    }
    
    logger.debug("Retrieved education items from DynamoDB", result);
    return result.Items[0].educationItems;
  }

//   updateAboutSection = async (educationItem: EducationItem): Promise<Boolean> => {
//     const params = {
//       TableName: RESUME_TABLE as string,
//       Key: {
//         "sectionName": "education"
//       },
//       UpdateExpression: "set email = :email, fullName = :fullName, phoneNumber = :phoneNumber, tagLine = :tagLine, address.lineOne = :l1, address.lineTwo = :l2",
//       ExpressionAttributeValues: {
//         ":email": about.email,
//         ":fullName": about.fullName,
//         ":phoneNumber": about.phoneNumber,
//         ":tagLine": about.tagLine,
//         ":l1": about.address.lineOne,
//         ":l2": about.address.lineTwo
//       }
//     };

//     let result;

//     try {
//       logger.info("Making call to DynamoDB to update About information");
//       result = await this.dynamoDb.update(params).promise();
//       logger.info("Update successful", result);
//       return true;
//     } catch (e) {
//       logger.error("Update failed", e);
//       return false;
//     }
//   }
}

export default EducationRepo;