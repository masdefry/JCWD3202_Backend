/*
  Warnings:

  - A unique constraint covering the columns `[employeeId]` on the table `employee_profiles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "employee_profiles_employeeId_key" ON "employee_profiles"("employeeId");
