module.exports = {
  tables: [
    {
      "TableName": "vehiculosTable",
      "KeySchema": {
        "AttributeName": "ID",
        "KeyType": "HASH"
      },
      "AttributeDefiunitions": [
        {
          "AttributeName": "ID",
          "AttributeType": "S"
        }
      ],
      "BillingMode": "PAY_PER_REQUEST"
    }
  ]
}