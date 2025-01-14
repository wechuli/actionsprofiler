import * as fs from 'fs';

const cleanupMetricsFile = () => {
  if (fs.existsSync('metrics.txt')) {
    fs.unlinkSync('metrics.txt');
  }
};

export { cleanupMetricsFile };
