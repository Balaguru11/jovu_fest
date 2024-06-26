/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Bride } from "./Bride";
import { BrideCountArgs } from "./BrideCountArgs";
import { BrideFindManyArgs } from "./BrideFindManyArgs";
import { BrideFindUniqueArgs } from "./BrideFindUniqueArgs";
import { CreateBrideArgs } from "./CreateBrideArgs";
import { UpdateBrideArgs } from "./UpdateBrideArgs";
import { DeleteBrideArgs } from "./DeleteBrideArgs";
import { BrideService } from "../bride.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Bride)
export class BrideResolverBase {
  constructor(
    protected readonly service: BrideService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Bride",
    action: "read",
    possession: "any",
  })
  async _bridesMeta(
    @graphql.Args() args: BrideCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Bride])
  @nestAccessControl.UseRoles({
    resource: "Bride",
    action: "read",
    possession: "any",
  })
  async brides(@graphql.Args() args: BrideFindManyArgs): Promise<Bride[]> {
    return this.service.brides(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Bride, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Bride",
    action: "read",
    possession: "own",
  })
  async bride(
    @graphql.Args() args: BrideFindUniqueArgs
  ): Promise<Bride | null> {
    const result = await this.service.bride(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bride)
  @nestAccessControl.UseRoles({
    resource: "Bride",
    action: "create",
    possession: "any",
  })
  async createBride(@graphql.Args() args: CreateBrideArgs): Promise<Bride> {
    return await this.service.createBride({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bride)
  @nestAccessControl.UseRoles({
    resource: "Bride",
    action: "update",
    possession: "any",
  })
  async updateBride(
    @graphql.Args() args: UpdateBrideArgs
  ): Promise<Bride | null> {
    try {
      return await this.service.updateBride({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Bride)
  @nestAccessControl.UseRoles({
    resource: "Bride",
    action: "delete",
    possession: "any",
  })
  async deleteBride(
    @graphql.Args() args: DeleteBrideArgs
  ): Promise<Bride | null> {
    try {
      return await this.service.deleteBride(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Query(() => [String])
  async SearchBrides(
    @graphql.Args()
    args: string
  ): Promise<string[]> {
    return this.service.SearchBrides(args);
  }

  @graphql.Query(() => String)
  async ViewBride(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ViewBride(args);
  }
}
