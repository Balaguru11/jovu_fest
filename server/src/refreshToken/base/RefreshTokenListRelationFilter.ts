/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RefreshTokenWhereInput } from "./RefreshTokenWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RefreshTokenListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RefreshTokenWhereInput,
  })
  @ValidateNested()
  @Type(() => RefreshTokenWhereInput)
  @IsOptional()
  @Field(() => RefreshTokenWhereInput, {
    nullable: true,
  })
  every?: RefreshTokenWhereInput;

  @ApiProperty({
    required: false,
    type: () => RefreshTokenWhereInput,
  })
  @ValidateNested()
  @Type(() => RefreshTokenWhereInput)
  @IsOptional()
  @Field(() => RefreshTokenWhereInput, {
    nullable: true,
  })
  some?: RefreshTokenWhereInput;

  @ApiProperty({
    required: false,
    type: () => RefreshTokenWhereInput,
  })
  @ValidateNested()
  @Type(() => RefreshTokenWhereInput)
  @IsOptional()
  @Field(() => RefreshTokenWhereInput, {
    nullable: true,
  })
  none?: RefreshTokenWhereInput;
}
export { RefreshTokenListRelationFilter as RefreshTokenListRelationFilter };
