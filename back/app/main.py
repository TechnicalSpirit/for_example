from fastapi import FastAPI, APIRouter

app = FastAPI()
router = APIRouter()

@router.get("/")
async def get_example():
    return {
        "name": "test",
        "fields": {
            "key_1": "val_1",
            "key_2": "val_2",
        }
    }

app.include_router(router)