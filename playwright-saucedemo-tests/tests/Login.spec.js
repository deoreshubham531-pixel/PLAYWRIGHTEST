const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const users = require('../test-data/users');
 
test.describe('Login Tests', () => {
  test('TC_LOGIN_01: Valid login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.validUser.username, users.validUser.password);
    await expect(page).toHaveURL(/.*inventory/);
  });
 
  test('TC_LOGIN_02: Invalid password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.invalidUser.username, users.invalidUser.password);
    await expect(await login.getErrorMessage()).toContain('Epic sadface: Username and password do not match any user in this service');
  });
 
  test('TC_LOGIN_03: Locked out user', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.lockedUser.username, users.lockedUser.password);
    await expect(await login.getErrorMessage()).toContain('locked out');
  });
 
  test('TC_LOGIN_04: Empty credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('', '');
    await expect(await login.getErrorMessage()).toContain('Username is required');
  });
});
 