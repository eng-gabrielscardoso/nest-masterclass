import { PrismaService } from './database/prisma.service';
import { Body, Controller, Get } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateTeamMemberBody } from './dtos/create-team-member-body.dto';

@Controller('app')
export class AppController {
  public constructor(private readonly prismaService: PrismaService) {}

  @Get('/hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    const member = await this.prismaService.teamMember.create({
      data: {
        id: randomUUID(),
        name: name,
        function: memberFunction,
      },
    });

    return {
      member,
    };
  }
}
