import { IsNotEmpty } from "class-validator";

export class PassthruDTO {
    @IsNotEmpty()
    params: {[key:string]:any};
}