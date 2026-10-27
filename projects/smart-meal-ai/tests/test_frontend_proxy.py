from fastapi.testclient import TestClient
import api as api_module


def test_backend_does_not_claim_frontend_root_path():
    """The combined Vercel output serves the frontend before requests reach FastAPI."""
    client = TestClient(api_module.app)
    response = client.get("/")

    assert response.status_code == 404


def test_api_health_alias_is_available():
    client = TestClient(api_module.app)
    response = client.get("/api/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}
