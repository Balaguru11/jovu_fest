import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { GroomModule } from "./groom/groom.module";
import { BrideModule } from "./bride/bride.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { ChatMessageModule } from "./chatMessage/chatMessage.module";
import { RefreshTokenModule } from "./refreshToken/refreshToken.module";
import { SearchBrideModule } from "./SearchBride/searchbride.module";
import { SearchGroomModule } from "./SearchGroom/searchgroom.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    GroomModule,
    BrideModule,
    SubscriptionModule,
    ChatMessageModule,
    RefreshTokenModule,
    SearchBrideModule,
    SearchGroomModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
