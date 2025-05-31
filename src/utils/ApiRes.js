class ApiRes {
  constructor(statusCode, data, message = "suceess") {
    (this.statusCode = statusCode),
      (this.message = message),
      (this.data = data),
      (this.success = statusCode);
  }
}
