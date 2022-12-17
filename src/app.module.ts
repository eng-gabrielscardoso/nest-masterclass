import { PrismaMemberRepository } from './repositories/prisma/prisma-member.repository';
import { PrismaService } from './database/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MemberRepository } from './repositories/member.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: MemberRepository,
      useClass: PrismaMemberRepository,
    },
  ],
})
export class AppModule {}
