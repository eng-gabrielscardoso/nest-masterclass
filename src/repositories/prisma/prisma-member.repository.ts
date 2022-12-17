import { Injectable } from '@nestjs/common';
import { PrismaService } from './../../database/prisma.service';
import { MemberRepository } from '../member.repository';
import { randomUUID } from 'node:crypto';

@Injectable()
export class PrismaMemberRepository extends MemberRepository {
  public constructor(private readonly prismaService: PrismaService) {
    super();
  }

  async create(name: string, memberFunction: string): Promise<void> {
    await this.prismaService.teamMember.create({
      data: {
        id: randomUUID(),
        name: name,
        function: memberFunction,
      },
    });
  }
}
