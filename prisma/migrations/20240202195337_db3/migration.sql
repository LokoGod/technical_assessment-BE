-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Inventory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "manufactureDate" TEXT NOT NULL,
    "expireDate" TEXT NOT NULL
);
INSERT INTO "new_Inventory" ("description", "expireDate", "id", "manufactureDate", "name", "price", "quantity") SELECT "description", "expireDate", "id", "manufactureDate", "name", "price", "quantity" FROM "Inventory";
DROP TABLE "Inventory";
ALTER TABLE "new_Inventory" RENAME TO "Inventory";
CREATE UNIQUE INDEX "Inventory_name_key" ON "Inventory"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
