import {observable, action, computed} from 'mobx'

export default class UserStore {

    @observable
    loggedIn = false;

    @observable
    currentPath = "";

    @observable
    count = 0

    @action
    increment(): void {
        this.count++
    }

    @action
    decrement(): void {
        this.count--
    }

    @computed
    get doubleCount(): number {
        return this.count * 2
    }

    @action
    async login(username: string): Promise<void> {
        try {
            // const res = await fetch(`http://localhost:8080/login/`);
            // const result = await res.json();
            let result;
            if (username === "Bob") {
                result = {
                    success: true
                };
            } else {
                result = {
                    success: false
                };
            }
            this.loggedIn = result.success;
        } catch (error) {
            this.loggedIn = false;
        }
    }
}