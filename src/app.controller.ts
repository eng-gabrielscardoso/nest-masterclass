import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body.dto';
import { MemberRepository } from './repositories/member.repository';

@Controller('app')
export class AppController {
  public constructor(private readonly memberRepository: MemberRepository) {}

  @Post('/create')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    try {
      await this.memberRepository.create(name, memberFunction);
      Logger.log(
        `Created team member: { Name: '${name}', function: '${memberFunction}' }`,
        'AppController',
      );
    } catch (error) {
      Logger.error(error, 'AppController');
    }
  }
}
