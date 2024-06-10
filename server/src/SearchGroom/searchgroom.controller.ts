import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SearchGroomService } from "./searchgroom.service";

@swagger.ApiTags("searchGrooms")
@common.Controller("searchGrooms")
export class SearchGroomController {
  constructor(protected readonly service: SearchGroomService) {}
}
