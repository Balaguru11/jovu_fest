import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SearchBrideService } from "./searchbride.service";

@swagger.ApiTags("searchBrides")
@common.Controller("searchBrides")
export class SearchBrideController {
  constructor(protected readonly service: SearchBrideService) {}

  @common.Get("/:id/search-brides")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SearchBrides(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SearchBrides(body);
      }

  @common.Get("/:id/view-bride")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ViewBride(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ViewBride(body);
      }
}
