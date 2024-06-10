import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GroomService } from "./groom.service";
import { GroomControllerBase } from "./base/groom.controller.base";

@swagger.ApiTags("grooms")
@common.Controller("grooms")
export class GroomController extends GroomControllerBase {
  constructor(
    protected readonly service: GroomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
