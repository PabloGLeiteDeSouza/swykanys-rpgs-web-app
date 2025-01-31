export default class Libsodium {
    private sodium!: typeof import('libsodium-wrappers');
    constructor() {
        import("libsodium-wrappers").then((data) => {
            this.sodium = data;
        });
        
    }

    async generate_key_pair(){
        await this.sodium.ready;
        const key = this.sodium.crypto_box_keypair();
        return {  public_key: this.sodium.to_hex(key.publicKey), private_key: this.sodium.to_hex(key.privateKey) };
    }
    async generate_key(){
        await this.sodium.ready;
        return this.sodium.to_hex(this.sodium.crypto_secretbox_keygen());
    }

    async encripty_key(key: string, data: string){
        await this.sodium.ready;
        const Key = this.sodium.from_hex(key);
        const nonce = this.sodium.randombytes_buf(this.sodium.crypto_secretbox_NONCEBYTES);
        const encrypted = this.sodium.crypto_secretbox_easy(data, nonce, Key);
        return this.sodium.to_hex(new Uint8Array([...nonce, ...encrypted]));
    }
    async encripty_key_pair(public_key: string, private_key: string, data: string){
        await this.sodium.ready;
        const PrivateKey = this.sodium.from_hex(private_key);
        const PublicKey = this.sodium.from_hex(public_key);
        const nonce = this.sodium.randombytes_buf(this.sodium.crypto_secretbox_NONCEBYTES);
        const encrypted = this.sodium.crypto_box_easy(data, nonce, PublicKey, PrivateKey);
        return this.sodium.to_hex(new Uint8Array([...nonce, ...encrypted]));
    }

    async decrypty_key(key: string, data: string){
        await this.sodium.ready;
        const Key = this.sodium.from_hex(key);
        const encrypted = this.sodium.from_hex(data);
        const nonce = encrypted.slice(0, this.sodium.crypto_secretbox_NONCEBYTES);
        const decrypted = this.sodium.crypto_secretbox_open_easy(encrypted.slice(this.sodium.crypto_secretbox_NONCEBYTES), nonce, Key);
        return this.sodium.to_string(decrypted);
    }
    async decrypty_key_pair(public_key: string, private_key: string, data: string){
        await this.sodium.ready;
        const PublicKey = this.sodium.from_hex(public_key);
        const PrivateKey = this.sodium.from_hex(private_key);
        const encrypted = this.sodium.from_hex(data);
        const nonce = encrypted.slice(0, this.sodium.crypto_box_NONCEBYTES);
        const decrypted = this.sodium.crypto_box_open_easy(encrypted.slice(this.sodium.crypto_box_NONCEBYTES), nonce, PublicKey, PrivateKey);
        return this.sodium.to_string(decrypted);
    }
}