export default class Colleague {
    private firstName: string;
    private lastName: string;
    private nickname: string;
    private imageUrl: string;

    constructor(json: {first: string, last: string, pseudo: string, photo: string}) {
        this.firstName = json.first;
        this.lastName = json.last;
        this.nickname = json.pseudo;
        this.imageUrl = json.photo;
    }

    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    getNickname(): string {
        return this.nickname;
    }

    setNickname(nickname: string): void {
        this.nickname = nickname;
    }

    getImageUrl(): string {
        return this.imageUrl;
    }

    setImageUrl(imageUrl: string): void {
        this.imageUrl = imageUrl;
    }

    toString(): string {
        if (this.firstName === undefined && this.lastName === undefined) {
            return this.nickname;
        }

        return `${this.firstName} ${this.lastName} (alias ${this.nickname})`;
    }
}