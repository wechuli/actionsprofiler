# System Metrics Collector GitHub Action

This GitHub Action collects system metrics through the lifecycle of a job using Prometheus. The collected metrics can be used to diagnose issues with the build.

## Usage

To use this action in your workflow, add the following step to your `.github/workflows/metrics-collector.yml` file:

```yaml
name: Collect System Metrics
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Collect system metrics
        uses: wechuli/actionsprofiler@v1
        with:
          job_name: 'build-job'

      - name: Build
        run: npm run build

      - name: Upload metrics
        uses: actions/upload-artifact@v2
        with:
          name: system-metrics
          path: metrics.txt
```

## Examples

Here are some examples of how to use the System Metrics Collector GitHub Action in your workflows:

### Example 1: Basic Usage

```yaml
name: Collect System Metrics
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Collect system metrics
        uses: wechuli/actionsprofiler@v1
        with:
          job_name: 'build-job'

      - name: Build
        run: npm run build

      - name: Upload metrics
        uses: actions/upload-artifact@v2
        with:
          name: system-metrics
          path: metrics.txt
```

### Example 2: Custom Job Name

```yaml
name: Collect System Metrics
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Collect system metrics
        uses: wechuli/actionsprofiler@v1
        with:
          job_name: 'custom-job'

      - name: Build
        run: npm run build

      - name: Upload metrics
        uses: actions/upload-artifact@v2
        with:
          name: system-metrics
          path: metrics.txt
```

## Inputs

| Input     | Description                                      | Required | Default       |
|-----------|--------------------------------------------------|----------|---------------|
| job_name  | The name of the job for which metrics are being collected. | true     | default-job  |

## Outputs

This action does not produce any outputs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
