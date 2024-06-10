import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { BrideController } from "../bride.controller";
import { BrideService } from "../bride.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  age: 42,
  createdAt: new Date(),
  educationLevel: "exampleEducationLevel",
  email: "exampleEmail",
  ethnicity: "exampleEthnicity",
  familyDetails: "exampleFamilyDetails",
  height: 42.42,
  hobbies: "exampleHobbies",
  id: "exampleId",
  interests: "exampleInterests",
  languageSpoken: "exampleLanguageSpoken",
  location: "exampleLocation",
  name: "exampleName",
  occupation: "exampleOccupation",
  phoneNumber: "examplePhoneNumber",
  religion: "exampleReligion",
  updatedAt: new Date(),
  weight: 42.42,
};
const CREATE_RESULT = {
  age: 42,
  createdAt: new Date(),
  educationLevel: "exampleEducationLevel",
  email: "exampleEmail",
  ethnicity: "exampleEthnicity",
  familyDetails: "exampleFamilyDetails",
  height: 42.42,
  hobbies: "exampleHobbies",
  id: "exampleId",
  interests: "exampleInterests",
  languageSpoken: "exampleLanguageSpoken",
  location: "exampleLocation",
  name: "exampleName",
  occupation: "exampleOccupation",
  phoneNumber: "examplePhoneNumber",
  religion: "exampleReligion",
  updatedAt: new Date(),
  weight: 42.42,
};
const FIND_MANY_RESULT = [
  {
    age: 42,
    createdAt: new Date(),
    educationLevel: "exampleEducationLevel",
    email: "exampleEmail",
    ethnicity: "exampleEthnicity",
    familyDetails: "exampleFamilyDetails",
    height: 42.42,
    hobbies: "exampleHobbies",
    id: "exampleId",
    interests: "exampleInterests",
    languageSpoken: "exampleLanguageSpoken",
    location: "exampleLocation",
    name: "exampleName",
    occupation: "exampleOccupation",
    phoneNumber: "examplePhoneNumber",
    religion: "exampleReligion",
    updatedAt: new Date(),
    weight: 42.42,
  },
];
const FIND_ONE_RESULT = {
  age: 42,
  createdAt: new Date(),
  educationLevel: "exampleEducationLevel",
  email: "exampleEmail",
  ethnicity: "exampleEthnicity",
  familyDetails: "exampleFamilyDetails",
  height: 42.42,
  hobbies: "exampleHobbies",
  id: "exampleId",
  interests: "exampleInterests",
  languageSpoken: "exampleLanguageSpoken",
  location: "exampleLocation",
  name: "exampleName",
  occupation: "exampleOccupation",
  phoneNumber: "examplePhoneNumber",
  religion: "exampleReligion",
  updatedAt: new Date(),
  weight: 42.42,
};

const service = {
  createBride() {
    return CREATE_RESULT;
  },
  brides: () => FIND_MANY_RESULT,
  bride: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Bride", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BrideService,
          useValue: service,
        },
      ],
      controllers: [BrideController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /brides", async () => {
    await request(app.getHttpServer())
      .post("/brides")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /brides", async () => {
    await request(app.getHttpServer())
      .get("/brides")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /brides/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/brides"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /brides/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/brides"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /brides existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/brides")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/brides")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
