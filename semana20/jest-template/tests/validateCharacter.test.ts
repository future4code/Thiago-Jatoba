import { validateCharacter } from "../src/validateCharachter"

describe("Testing function validateEmptyProperties", () => {
    test("Should return false for empty name", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
        });
    
        expect(result).toBe(false);
    });

    test("Should return false for life 0", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 0,
            strength: 300,
            defense: 500,
        });
    
        expect(result).toBe(false);
    });

    test("Should return false for strength 0", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            strength: 0,
            defense: 500,
        });
    
        expect(result).toBe(false);
    });

    test("Should return false for defense 0", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            strength: 300,
            defense: 0,
        });
    
        expect(result).toBe(false);
    });

    test("Should return false for life, strength or defense negative", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: -1500,
            strength: -300,
            defense: -100,
        });
    
        expect(result).toBe(false);
    });

    test("Should return true for all valid inputs", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            strength: 300,
            defense: 500,
        });
    
        expect(result).toBe(true);
    });



})