import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUser1554349196811 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true
          },
          {
            name: 'username',
            type: 'varchar',
            length: '20',
            isUnique: true
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'email',
            type: 'varchar',
            length: '80',
            isUnique: true
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('users');
  }
}
