import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RefreshTokenResolverBase } from "./base/refreshToken.resolver.base";
import { RefreshToken } from "./base/RefreshToken";
import { RefreshTokenService } from "./refreshToken.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RefreshToken)
export class RefreshTokenResolver extends RefreshTokenResolverBase {
  constructor(
    protected readonly service: RefreshTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
