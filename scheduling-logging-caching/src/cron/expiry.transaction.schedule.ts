import cron from 'node-cron';
import { expiryTransactionJob } from './jobs/expiry.transaction.job';

export const expiryTransactionSchedule = () => {
    cron.schedule('* * * * *', async () => {
        console.log(`Running Expiry Transaction Job at ${new Date()}`);
        expiryTransactionJob()
    })
}