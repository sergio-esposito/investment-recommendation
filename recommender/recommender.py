def get_recommendation(profile):
    if profile == "conservador":
        return {"acciones": 20, "bonos": 60, "oro": 10, "cripto": 10}
    elif profile == "moderado":
        return {"acciones": 40, "bonos": 40, "oro": 10, "cripto": 10}
    else:
        return {"acciones": 60, "bonos": 20, "oro": 10, "cripto": 10}
