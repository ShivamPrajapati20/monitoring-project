# 🚀 Monitoring Stack with Prometheus, Grafana & Node.js

## 📌 Overview

This project demonstrates a **production-style monitoring system** using:

* Prometheus for metrics collection
* Grafana for visualization
* Node.js application exposing custom and default metrics

The system is fully containerized using Docker Compose.

---

## 🧱 Architecture

Node.js App → Prometheus → Grafana Dashboard

---

## ⚙️ Tech Stack

* Node.js (Express)
* Prometheus
* Grafana
* Docker & Docker Compose

---

## 📊 Features

* Collects default system metrics (CPU, memory)
* Tracks custom metric: HTTP request count
* Real-time monitoring dashboards
* Containerized microservices setup

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/your-username/monitoring-project.git
cd monitoring-project
```

---

### 2. Run the Project

```bash
docker compose up --build
```

---

### 3. Access Services

| Service    | URL                   |
| ---------- | --------------------- |
| App        | http://localhost:4000 |
| Prometheus | http://localhost:9090 |
| Grafana    | http://localhost:3001 |

---

### 4. Grafana Login

* Username: admin
* Password: admin

---

## 🔌 Configure Grafana

1. Go to **Settings → Data Sources**
2. Add Prometheus
3. URL: http://prometheus:9090
4. Save & Test

---

## 📈 Example Metrics

* http_requests_total
* process_cpu_seconds_total
* nodejs_eventloop_lag_seconds

---

## 🧠 Key Learnings

* Implemented pull-based monitoring using Prometheus
* Exposed application metrics using prom-client
* Built real-time dashboards with Grafana
* Used Docker Compose for multi-service orchestration

---

## 🚀 Future Improvements

* Add alerting (CPU, error rate)
* Add Node Exporter for system metrics
* Deploy on AWS (EC2 or Kubernetes)
* Add CI/CD pipeline

Feel free to connect or reach out for collaboration!
