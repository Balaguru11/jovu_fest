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
import { RefreshToken } from "./RefreshToken";
import { RefreshTokenCountArgs } from "./RefreshTokenCountArgs";
import { RefreshTokenFindManyArgs } from "./RefreshTokenFindManyArgs";
import { RefreshTokenFindUniqueArgs } from "./RefreshTokenFindUniqueArgs";
import { CreateRefreshTokenArgs } from "./CreateRefreshTokenArgs";
import { UpdateRefreshTokenArgs } from "./UpdateRefreshTokenArgs";
import { DeleteRefreshTokenArgs } from "./DeleteRefreshTokenArgs";
import { User } from "../../user/base/User";
import { RefreshTokenService } from "../refreshToken.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RefreshToken)
export class RefreshTokenResolverBase {
  constructor(
    protected readonly service: RefreshTokenService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "RefreshToken",
    action: "read",
    possession: "any",
  })
  async _refreshTokensMeta(
    @graphql.Args() args: RefreshTokenCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [RefreshToken])
  @nestAccessControl.UseRoles({
    resource: "RefreshToken",
    action: "read",
    possession: "any",
  })
  async refreshTokens(
    @graphql.Args() args: RefreshTokenFindManyArgs
  ): Promise<RefreshToken[]> {
    return this.service.refreshTokens(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => RefreshToken, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "RefreshToken",
    action: "read",
    possession: "own",
  })
  async refreshToken(
    @graphql.Args() args: RefreshTokenFindUniqueArgs
  ): Promise<RefreshToken | null> {
    const result = await this.service.refreshToken(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RefreshToken)
  @nestAccessControl.UseRoles({
    resource: "RefreshToken",
    action: "create",
    possession: "any",
  })
  async createRefreshToken(
    @graphql.Args() args: CreateRefreshTokenArgs
  ): Promise<RefreshToken> {
    return await this.service.createRefreshToken({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RefreshToken)
  @nestAccessControl.UseRoles({
    resource: "RefreshToken",
    action: "update",
    possession: "any",
  })
  async updateRefreshToken(
    @graphql.Args() args: UpdateRefreshTokenArgs
  ): Promise<RefreshToken | null> {
    try {
      return await this.service.updateRefreshToken({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => RefreshToken)
  @nestAccessControl.UseRoles({
    resource: "RefreshToken",
    action: "delete",
    possession: "any",
  })
  async deleteRefreshToken(
    @graphql.Args() args: DeleteRefreshTokenArgs
  ): Promise<RefreshToken | null> {
    try {
      return await this.service.deleteRefreshToken(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: RefreshToken): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
