
//var validator = require('email-validator')
import * as validator from "email-validator"

export class User {
    email: string
    password: string

    public isValidate(){
        return validator.validate(this.email)
    }
}
