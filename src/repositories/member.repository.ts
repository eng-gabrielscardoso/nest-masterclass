// Use abstract class to do the dependency injection
export abstract class MemberRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}
