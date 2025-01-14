import * as client from 'prom-client';

const setupMetricsCollection = () => {
  const register = new client.Registry();

  const cpuUsage = new client.Gauge({
    name: 'cpu_usage',
    help: 'CPU usage in percentage',
    registers: [register],
  });

  const memoryUsage = new client.Gauge({
    name: 'memory_usage',
    help: 'Memory usage in bytes',
    registers: [register],
  });

  setInterval(() => {
    const cpuLoad = os.loadavg()[0];
    const memoryLoad = os.totalmem() - os.freemem();

    cpuUsage.set(cpuLoad);
    memoryUsage.set(memoryLoad);

    fs.writeFileSync('metrics.txt', register.metrics());
  }, 5000);
};

export { setupMetricsCollection };
