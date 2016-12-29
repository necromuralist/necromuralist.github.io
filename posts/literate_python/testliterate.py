from expects import expect
from expects import equal
from pytest import fixture
from pytest_bdd import given
from pytest_bdd import scenario
from pytest_bdd import then
from pytest_bdd import when

# this code
from literate import LiterateClass

FEATURE_FILE = "literate.feature"


class Context(object):
    """context object"""


@fixture
def context():
    return Context()


@scenario(FEATURE_FILE, "Creating a literate object")
def test_constructor():
    return


@given("a name")
def add_name(context, faker):
    context.name = faker.name()


@when('a Literate object is created with the name')
def create_object(context):
    context.object = LiterateClass(context.name)


@then("the literate object has the name")
def check_object_name(context):
    expect(context.name).to(equal(context.object.who))
    return
