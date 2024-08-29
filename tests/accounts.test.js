const { Account } = require("../src/models");
const {
	getAllAccounts,
	getAccountById,
	createAccount,
	updateAccount,
	deleteAccount,
} = require("../src/controllers/accountController");

jest.mock("../src/models");

describe("Account Controller", () => {
	describe("getAllAccounts", () => {
		it("should get all accounts", async () => {
			const accounts = [{ id: 1, name: "Test Account" }];
			Account.findAll.mockResolvedValue(accounts);

			const req = {};
			const res = {
				send: jest.fn().mockReturnThis(),
				code: jest.fn().mockReturnThis(),
			};

			await getAllAccounts(req, res);

			expect(res.send).toHaveBeenCalledWith({
				data: accounts,
				message: "Successfully get all accounts",
			});
			expect(res.code).toHaveBeenCalledWith(200);
		});

		it("should return an error if fetching accounts fails", async () => {
			const error = new Error("Fetch failed");
			Account.findAll.mockRejectedValue(error);

			const req = {};
			const res = {
				send: jest.fn().mockReturnThis(),
				code: jest.fn().mockReturnThis(),
			};

			await getAllAccounts(req, res);

			expect(res.send).toHaveBeenCalledWith(error);
			expect(res.code).toHaveBeenCalledWith(500);
		});
	});

	describe("getAccountById", () => {
		it("should get an account by id", async () => {
			const account = { id: 1, name: "Test Account" };
			Account.findByPk.mockResolvedValue(account);

			const req = { params: { id: 1 } };
			const res = {
				send: jest.fn().mockReturnThis(),
				code: jest.fn().mockReturnThis(),
			};

			await getAccountById(req, res);

			expect(res.send).toHaveBeenCalledWith({
				data: account,
				message: "Successfully get account by id",
			});
			expect(res.code).toHaveBeenCalledWith(200);
		});

		it("should return an error if account not found", async () => {
			Account.findByPk.mockResolvedValue(null);

			const req = { params: { id: 1 } };
			const res = {
				send: jest.fn().mockReturnThis(),
				code: jest.fn().mockReturnThis(),
			};

			await getAccountById(req, res);

			expect(res.send).toHaveBeenCalledWith({ message: "Account not found" });
			expect(res.code).toHaveBeenCalledWith(404);
		});

		it("should return an error if fetching account fails", async () => {
			const error = new Error("Fetch failed");
			Account.findByPk.mockRejectedValue(error);

			const req = { params: { id: 1 } };
			const res = {
				send: jest.fn().mockReturnThis(),
				code: jest.fn().mockReturnThis(),
			};

			await getAccountById(req, res);

			expect(res.send).toHaveBeenCalledWith(error);
			expect(res.code).toHaveBeenCalledWith(500);
		});
	});

	describe("createAccount", () => {
		it("should create a new account", async () => {
			const account = { id: 1, name: "Test Account" };
			Account.findOne.mockResolvedValue(null);
			Account.create.mockResolvedValue(account);

			const req = {
				body: {
					name: "Test Account",
					email: "test@example.com",
					password: "password",
					role: "user",
				},
			};
			const res = {
				send: jest.fn().mockReturnThis(),
				code: jest.fn().mockReturnThis(),
			};

			await createAccount(req, res);

			expect(res.send).toHaveBeenCalledWith({
				data: account,
				message: "Successfully create account",
			});
			expect(res.code).toHaveBeenCalledWith(201);
		});

		it("should return an error if email already exists", async () => {
			const account = { id: 1, name: "Test Account" };
			Account.findOne.mockResolvedValue(account);

			const req = {
				body: {
					name: "Test Account",
					email: "test@example.com",
					password: "password",
					role: "user",
				},
			};
			const res = {
				send: jest.fn().mockReturnThis(),
				code: jest.fn().mockReturnThis(),
			};

			await createAccount(req, res);

			expect(res.send).toHaveBeenCalledWith({
				message: "Email already exists",
			});
			expect(res.code).toHaveBeenCalledWith(400);
		});

		it("should return an error if account creation fails", async () => {
			const error = new Error("Creation failed");
			Account.findOne.mockResolvedValue(null);
			Account.create.mockRejectedValue(error);

			const req = {
				body: {
					name: "Test Account",
					email: "test@example.com",
					password: "password",
					role: "user",
				},
			};
			const res = {
				send: jest.fn().mockReturnThis(),
				code: jest.fn().mockReturnThis(),
			};

			await createAccount(req, res);

			expect(res.send).toHaveBeenCalledWith(error);
			expect(res.code).toHaveBeenCalledWith(500);
		});
	});

	describe("updateAccount", () => {
		it("should update an existing account", async () => {
			const account = { id: 1, name: "Test Account", save: jest.fn() };
			Account.findByPk.mockResolvedValue(account);

			const req = {
				params: { id: 1 },
				body: {
					name: "Updated Account",
					email: "updated@example.com",
					password: "newpassword",
					role: "admin",
				},
			};
			const res = {
				send: jest.fn().mockReturnThis(),
				code: jest.fn().mockReturnThis(),
			};

			await updateAccount(req, res);

			expect(account.save).toHaveBeenCalled();
			expect(res.send).toHaveBeenCalledWith({
				data: account,
				message: "Successfully update account",
			});
			expect(res.code).toHaveBeenCalledWith(200);
		});

		it("should return an error if account not found", async () => {
			Account.findByPk.mockResolvedValue(null);

			const req = {
				params: { id: 1 },
				body: {
					name: "Updated Account",
					email: "updated@example.com",
					password: "newpassword",
					role: "admin",
				},
			};
			const res = {
				send: jest.fn().mockReturnThis(),
				code: jest.fn().mockReturnThis(),
			};

			await updateAccount(req, res);

			expect(res.send).toHaveBeenCalledWith({ message: "Account not found" });
			expect(res.code).toHaveBeenCalledWith(404);
		});

		it("should return an error if account update fails", async () => {
			const error = new Error("Update failed");
			const account = {
				id: 1,
				name: "Test Account",
				save: jest.fn().mockRejectedValue(error),
			};
			Account.findByPk.mockResolvedValue(account);

			const req = {
				params: { id: 1 },
				body: {
					name: "Updated Account",
					email: "updated@example.com",
					password: "newpassword",
					role: "admin",
				},
			};
			const res = {
				send: jest.fn().mockReturnThis(),
				code: jest.fn().mockReturnThis(),
			};

			await updateAccount(req, res);

			expect(res.send).toHaveBeenCalledWith(error);
			expect(res.code).toHaveBeenCalledWith(500);
		});
	});

	describe("deleteAccount", () => {
		it("should delete an existing account", async () => {
			const account = { id: 1, name: "Test Account", destroy: jest.fn() };
			Account.findByPk.mockResolvedValue(account);

			const req = { params: { id: 1 } };
			const res = {
				send: jest.fn().mockReturnThis(),
				code: jest.fn().mockReturnThis(),
			};

			await deleteAccount(req, res);

			expect(account.destroy).toHaveBeenCalled();
			expect(res.send).toHaveBeenCalledWith({
				data: account,
				message: "Successfully delete account",
			});
			expect(res.code).toHaveBeenCalledWith(200);
		});

		it("should return an error if account not found", async () => {
			Account.findByPk.mockResolvedValue(null);

			const req = { params: { id: 1 } };
			const res = {
				send: jest.fn().mockReturnThis(),
				code: jest.fn().mockReturnThis(),
			};

			await deleteAccount(req, res);

			expect(res.send).toHaveBeenCalledWith({ message: "Account not found" });
			expect(res.code).toHaveBeenCalledWith(404);
		});

		it("should return an error if account deletion fails", async () => {
			const error = new Error("Deletion failed");
			const account = {
				id: 1,
				name: "Test Account",
				destroy: jest.fn().mockRejectedValue(error),
			};
			Account.findByPk.mockResolvedValue(account);

			const req = { params: { id: 1 } };
			const res = {
				send: jest.fn().mockReturnThis(),
				code: jest.fn().mockReturnThis(),
			};

			await deleteAccount(req, res);

			expect(res.send).toHaveBeenCalledWith(error);
			expect(res.code).toHaveBeenCalledWith(500);
		});
	});
});
