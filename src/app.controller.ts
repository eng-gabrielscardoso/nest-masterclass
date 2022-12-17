import { PrismaService } from './database/prisma.service';
import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  public constructor(private readonly prismaService: PrismaService) {}

  @Get('/hello')
  async getHello() {
    const member = await this.prismaService.teamMember.create({
      data: {
        id: 'captain',
        name: 'Gabriel Santos Cardoso',
        function: 'Navigate between the tears',
      },
    });

    return {
      member,
    };
  }
}
