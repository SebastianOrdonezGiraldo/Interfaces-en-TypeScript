interface Database {
    connect(): void;
    find(query: string): any[];
    update(query: string, data: any): void;
}
class MySQLDatabase implements Database {
    connect(): void {}

    find(query: string): any[] {
    return [];
}

update(query: string, data: any): void {}
}

class SQLiteDatabase implements Database {
    connect(): void {}

    find(query: string): any[] {
    return [];
}

update(query: string, data: any): void {}
}
