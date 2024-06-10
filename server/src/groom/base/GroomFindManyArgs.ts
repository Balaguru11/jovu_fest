/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GroomWhereInput } from "./GroomWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GroomOrderByInput } from "./GroomOrderByInput";

@ArgsType()
class GroomFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GroomWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GroomWhereInput, { nullable: true })
  @Type(() => GroomWhereInput)
  where?: GroomWhereInput;

  @ApiProperty({
    required: false,
    type: [GroomOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GroomOrderByInput], { nullable: true })
  @Type(() => GroomOrderByInput)
  orderBy?: Array<GroomOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { GroomFindManyArgs as GroomFindManyArgs };
