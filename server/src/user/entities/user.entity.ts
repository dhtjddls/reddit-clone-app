import * as bcrypt from 'bcrypt';
import { IsEmail, Length } from 'class-validator';
import { BaseEntity } from 'src/common/base-entity';
import Post from 'src/post/entities/post.entity';
import Vote from 'src/vote/entities/vote.entity';
import { BeforeInsert, Column, Entity, Index, OneToMany } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Index()
  @IsEmail(undefined, { message: '이메일 주소가 잘못되었습니다.' })
  @Length(1, 255, { message: '이메일 주소는 비워둘 수 없습니다.' })
  @Column({ unique: true })
  email: string;

  @Index()
  @Length(3, 32, { message: '사용자 이름은 3자 이상이어야 합니다.' })
  @Column({ unique: true })
  username: string;

  @Column()
  @Length(6, 255, { message: '비밀번호는 6자리 이상이어야 합니다.' })
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Vote, (vote) => vote.user)
  votes: Vote[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 6);
  }
}
