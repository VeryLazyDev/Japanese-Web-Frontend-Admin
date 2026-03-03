const useUtils = () => {
    async function sha256(message) {
        const encoder = new TextEncoder();
        const data = encoder.encode(message);

        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        // const hashBuffere = await sha256(message);
        const hashArray = Array.from(new Uint8Array(hashBuffer));

        const hashHex = hashArray
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");

        return hashHex;
    }
    return { sha256 };
};
export default useUtils;
