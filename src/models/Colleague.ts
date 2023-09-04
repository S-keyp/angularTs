export default class Colleague {
    private firstName: string;
    private lastName: string;
    private nickname: string;
    private imageUrl: string;

    constructor(firstName: string, lastName: string, nickname: string, imageUrl: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
        this.imageUrl = imageUrl;
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
}